import React, { useEffect, memo } from 'react';
import { X } from 'lucide-react';

interface ImageModalProps { imageUrl: string | null; onClose: () => void; }

const ImageModal: React.FC<ImageModalProps> = memo(({ imageUrl, onClose }) => {
  useEffect(() => {
    if (!imageUrl) return;
    const handleKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [imageUrl, onClose]);

  if (!imageUrl) return null;

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) onClose();
  };

  return (
    <div id="modal-backdrop" className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[100] p-4 transition-opacity duration-300" onClick={handleBackdropClick} role="dialog" aria-modal="true" aria-labelledby="modal-image-title">
      <div className="relative bg-white p-2 rounded-lg shadow-xl max-w-3xl max-h-[85vh]">
        <h2 id="modal-image-title" className="sr-only">Enlarged Image View</h2>
        <button onClick={onClose} className="absolute -top-3 -right-3 bg-white text-gray-700 rounded-full p-1.5 shadow-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 z-[110]" aria-label="Close image viewer">
          <X className="w-5 h-5" />
        </button>
        <img src={imageUrl} alt="Enlarged view" className="block max-w-full max-h-[calc(85vh-1rem)] object-contain rounded" loading="lazy" onError={(e) => (e.currentTarget.src = 'https://placehold.co/800x600/cccccc/ffffff?text=Image+Load+Error')} />
      </div>
    </div>
  );
});
export default ImageModal;