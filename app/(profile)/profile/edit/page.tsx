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
      const {message} = await mutateAsync(formData);
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
      toast.success(message)
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  if (isLoading) return <p>loading</p>;
  console.log(formData);

  return (
    <div>
      <h1>اطلاعات کاربری</h1>
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
        <div>
          <button
            disabled={!!isUpdating}
            className="btn--primary w-full rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            بروزرسانی
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
