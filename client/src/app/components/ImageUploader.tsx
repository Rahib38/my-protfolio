"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface ImageUploadProps {
  onImageUpload: (imageUrl: string) => void;
}

export default function ImageUpload({ onImageUpload }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false); // Fix hydration mismatch

  useEffect(() => {
    setIsClient(true); // Client-side rendering only
  }, []);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append(
        "upload_preset",
        process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
      );

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      setPreview(data.secure_url);
      onImageUpload(data.secure_url);
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setUploading(false);
    }
  };

  if (!isClient) return null; // Prevents SSR mismatches

  return (
    <div className="flex flex-col items-center gap-2">
  <div className="relative my-6 inline-flex w-full items-center gap-2 rounded border border-slate-200 text-sm text-slate-500">
        <input
          id="file-upload"
          name="file-upload"
          type="file"
          className="peer order-2 [&::file-selector-button]:hidden"
          accept="image/*" onChange={handleImageChange} 
        />
        <label
          className="inline-flex h-12 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-6 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none peer-disabled:cursor-not-allowed peer-disabled:border-emerald-300 peer-disabled:bg-emerald-300"
        >
          {" "}
          Upload a file{" "}
        </label>
      </div>
      {uploading && <p className="text-gray-500">Uploading...</p>}
      
      {preview && (
        <div className="relative w-32 h-32 mt-2">
          <Image
            src={preview}
            alt="Uploaded Preview"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      )}
    </div>
  );
}
