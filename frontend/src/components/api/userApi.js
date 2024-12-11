const BASE_URL = 'http://localhost:5000/api/users';

export const getUsers = async () => {
  const response = await fetch(BASE_URL);
  if (!response.ok) throw new Error('Error al obtener usuarios');
  return response.json();
};

export const createUser = async (user) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  if (!response.ok) throw new Error('Error al crear usuario');
  return response.json();
};

export const updateUser = async (id, user) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  if (!response.ok) throw new Error('Error al actualizar usuario');
  return response.json();
};

export const deleteUserById = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Error al eliminar usuario');
};
