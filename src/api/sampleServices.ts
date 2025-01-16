import axiosInstance from '@/config/axiosInstance';
import { apiConstants } from '@/constants';

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

export const getUser = async () => {
  const config = {
    method: 'get',
    url: apiConstants.getUsers,
  };
  return axiosInstance(config);
};

export const singleUser = async (id: number) => {
  const config = {
    method: 'get',
    url: apiConstants.getUser + id,
  };
  return axiosInstance(config);
};

export const addUser = async (user: User) => {
  const config = {
    method: 'post',
    url: apiConstants.getUsers,
    data: user,
  };
  return axiosInstance(config);
};
