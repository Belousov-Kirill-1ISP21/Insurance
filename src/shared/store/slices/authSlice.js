import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const getStoredUsers = () => {
  const users = localStorage.getItem('registeredUsers');
  return users ? JSON.parse(users) : [];
};

const saveUserToStorage = (userData) => {
  const existingUsers = getStoredUsers();
  const newUsers = [...existingUsers, userData];
  localStorage.setItem('registeredUsers', JSON.stringify(newUsers));
};

const findUserByEmail = (email) => {
  const users = getStoredUsers();
  return users.find(user => user.email === email);
};

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const storedUser = findUserByEmail(email);
      
      if (!storedUser) {
        return rejectWithValue('Пользователь не найден');
      }
      
      if (storedUser.password !== password) {
        return rejectWithValue('Неверный пароль');
      }
      
      const { password: _, ...userWithoutPassword } = storedUser;
      
      const response = {
        user: { 
          id: storedUser.id, 
          email: storedUser.email, 
          name: `${storedUser.surname} ${storedUser.name}`,
          phone: storedUser.phone,
          username: storedUser.email.split('@')[0]
        }, 
        token: `fake-jwt-token-${Date.now()}`
      };
      
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const existingUser = findUserByEmail(userData.email);
      
      if (existingUser) {
        return rejectWithValue('Пользователь с таким email уже зарегистрирован');
      }
      
      const newUser = {
        id: Date.now(),
        ...userData,
        createdAt: new Date().toISOString()
      };
      
      saveUserToStorage(newUser);
      
      const { password: _, ...userWithoutPassword } = newUser;
      
      const response = {
        user: { 
          id: newUser.id, 
          email: newUser.email, 
          name: `${newUser.surname} ${newUser.name}`,
          phone: newUser.phone,
          username: newUser.email.split('@')[0]
        }, 
        token: `fake-jwt-token-${Date.now()}`
      };
      
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: localStorage.getItem('token'),
    isAuthenticated: !!localStorage.getItem('token'),
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token');
    },
    clearError: (state) => {
      state.error = null;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, clearError, setUser } = authSlice.actions;
export default authSlice.reducer;