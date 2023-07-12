import { useQuery } from "@tanstack/react-query";
import { getUserList, getUserProfile } from "../services/authServices";
export const useGetUser = () =>
  useQuery({
    queryKey: ["get-user"],
    queryFn: getUserProfile,
    retry: false,
  });

export const useGetUsers = () =>
  useQuery({
    queryKey: ["get-users"],
    queryFn: getUserList,
    retry: false,
  });
