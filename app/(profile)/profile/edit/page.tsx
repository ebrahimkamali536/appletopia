"use client";
import React, { useEffect, useState } from "react";
import { useGetUser } from "../../../../hook/useAuth";
import { includeObject } from "../../../../utils/objectUtils";
import TextField from "../../../../components/common/TextField";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserProfile } from "../../../../services/authServices";
import { toast } from "react-hot-toast";

const EditProfile = () => {
  const { isLoading, data } = useGetUser();
  const { isLoading: isUpdating, mutateAsync } = useMutation({
    mutationFn: updateUserProfile,
  });
  const queryClient = useQueryClient();
  const { user } = data || {};
  const includesKey = ["name", "email"];

  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (user) setFormData(includeObject(user, includesKey));
  }, [user]);

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync(formData);
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  if (isLoading) return <p>loading</p>;

  return (
    <div className="mt-6 md:mt-8 px-6 md:px-8">
      <div className="bg-white rounded-lg py-10 px-20">
        <h1 className="font-bold text-xl mb-8">اطلاعات کاربری</h1>
        <form onSubmit={submitHandler}>
          {Object.keys(includeObject(user, includesKey)).map((key) => (
            <TextField
              label={key}
              name={key}
              key={key}
              value={formData[key] || ""}
              onChange={(e) =>
                setFormData((prevState) => ({
                  ...prevState,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          ))}

            <button
              disabled={!!isUpdating}
              className="btn--primary w-full rounded-xl disabled:opacity-50 disabled:cursor-not-allowed mt-6"
            >
              بروزرسانی
            </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
