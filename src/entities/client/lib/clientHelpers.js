export const formatClientPhone = (phone) => {
  if (!phone) return 'Не указан';
  return phone;
};

export const getClientInitials = (client) => {
  if (!client || !client.name) return 'Клиент';
  const parts = client.name.split(' ');
  if (parts.length >= 2) {
    return `${parts[0]} ${parts[1].charAt(0)}.`;
  }
  return client.name;
};