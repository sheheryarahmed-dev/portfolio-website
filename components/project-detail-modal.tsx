"use client";

import React from "react";
import { Dialog, DialogTitle, Description } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface ProjectDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

export default function ProjectDetailModal({
  isOpen,
  onClose,
  title,
  description,
  tags,
  imageUrl,
}: ProjectDetailModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
        <div className="relative bg-white dark:bg-gray-900 rounded-lg max-w-lg w-full mx-auto p-6 z-50 shadow-xl">
          <button
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 dark:hover:text-white"
            onClick={onClose}
            aria-label="Close"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
          <img src={imageUrl} alt={title} className="w-full rounded mb-4" />
          <DialogTitle className="text-2xl font-bold mb-2">{title}</DialogTitle>
          <Description className="mb-4 text-gray-700 dark:text-gray-200">{description}</Description>
          <ul className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, idx) => (
              <li
                key={idx}
                className="bg-black/[0.7] px-3 py-1 text-xs uppercase tracking-wider text-white rounded-full dark:text-white/70"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Dialog>
  );
}
