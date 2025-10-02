import React from 'react';

interface ConfirmationDialogProps {
  isVisible: boolean;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  isVisible,
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  onConfirm,
  onCancel,
}) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" aria-modal="true" role="dialog">
      <div className="bg-slate-800 rounded-2xl shadow-xl w-full max-w-sm p-6 text-center border border-slate-700">
        <p className="text-white mb-6">{message}</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onCancel}
            className="px-6 py-2 rounded-lg bg-slate-600 text-white font-semibold hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500"
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            className="px-6 py-2 rounded-lg bg-[rgb(var(--color-danger))] text-white font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-danger))]"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
