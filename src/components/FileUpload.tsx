import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X } from 'lucide-react';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
  currentFile: File | null;
  accept: {
    [key: string]: string[];
  };
  label: string;
  dropzoneClassName?: string;
}

export default function FileUpload({ 
  onFileSelect, 
  currentFile, 
  accept, 
  label,
  dropzoneClassName = ''
}: FileUploadProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles[0]) {
      onFileSelect(acceptedFiles[0]);
    }
  }, [onFileSelect]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    maxFiles: 1,
    multiple: false
  });

  return (
    <div className="space-y-2">
      {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer
          ${isDragActive ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-green-500'}
          ${dropzoneClassName}`}
      >
        <input {...getInputProps()} />
        <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
        {currentFile ? (
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm text-gray-600">{currentFile.name}</span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onFileSelect(null as any);
              }}
              className="text-red-500 hover:text-red-700"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <p className="text-sm text-gray-500">
            {isDragActive ? 'Suelta el archivo aquí' : 'Arrastra un archivo o haz clic para seleccionar'}
          </p>
        )}
      </div>
    </div>
  );
}