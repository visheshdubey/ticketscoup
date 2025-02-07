import { useEffect, useRef } from 'react';

const useNotificationSound = ({ src, muted = false }: { src: string; muted?: boolean }): (() => void) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        audioRef.current = new Audio(src);

        const enableAudio = () => {
            if (audioRef.current) {
                audioRef.current
                    .play()
                    .then(() => {
                        if (audioRef.current) {
                            audioRef.current?.pause();
                            audioRef.current.currentTime = 0;
                        }
                    })
                    .catch(() => console.warn('User interaction required'));
            }
        };

        document.addEventListener('click', enableAudio, { once: true });

        return () => document.removeEventListener('click', enableAudio);
    }, []);

    const playSound = () => {
        if (audioRef.current && !muted) {
            audioRef.current.play().catch((e) => console.warn('Audio blocked:', e));
        }
    };

    return playSound;
};

export default useNotificationSound;
