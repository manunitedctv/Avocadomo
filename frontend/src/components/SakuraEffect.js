import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

const SakuraEffect = () => {
    const [petals, setPetals] = useState([]);

    useEffect(() => {
        const createPetal = () => {
            const id = Math.random().toString(36).substr(2, 9);
            const direction = Math.random() > 0.5 ? 1 : -1;
            const size = Math.random() * 10 + 15; // 15-25px
            const startPosition = Math.random() * window.innerWidth;
            const duration = Math.random() * 4 + 3; // 3-7s
            const delay = Math.random() * 3;
            const rotation = Math.random() * 360;
            const opacity = Math.random() * 0.4 + 0.6; // 0.6-1.0

            return {
                id,
                direction,
                size,
                startPosition,
                duration,
                delay,
                rotation,
                opacity,
            };
        };

        // Tạo số lượng hoa ban đầu (tăng lên 50)
        const initialPetals = Array.from({ length: 50 }, createPetal);
        setPetals(initialPetals);

        // Thêm hoa mới thường xuyên hơn
        const interval = setInterval(() => {
            setPetals(prev => [...prev.slice(-49), createPetal()]);
        }, 200);

        return () => clearInterval(interval);
    }, []);

    return (
        <Box
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                pointerEvents: 'none',
                overflow: 'hidden',
                zIndex: 1,
            }}
        >
            {petals.map(petal => (
                <Box
                    key={petal.id}
                    sx={{
                        position: 'absolute',
                        left: petal.startPosition,
                        top: -20,
                        width: petal.size,
                        height: petal.size,
                        opacity: petal.opacity,
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            background: 'radial-gradient(circle at 30% 30%, #ffb7c5, #ff69b4)',
                            borderRadius: '50% 0 50% 50%',
                            transform: 'rotate(45deg)',
                            filter: 'blur(1px)',
                        },
                        animation: `
                            falling ${petal.duration}s linear ${petal.delay}s infinite,
                            sway ${petal.duration * 0.5}s ease-in-out infinite,
                            rotating ${petal.duration * 0.5}s linear ${petal.delay}s infinite
                        `,
                        '@keyframes falling': {
                            '0%': {
                                transform: `translateY(0) translateX(0)`,
                            },
                            '100%': {
                                transform: `translateY(120vh) translateX(${150 * petal.direction}px)`,
                            },
                        },
                        '@keyframes sway': {
                            '0%, 100%': {
                                marginLeft: '0px',
                            },
                            '50%': {
                                marginLeft: `${20 * petal.direction}px`,
                            },
                        },
                        '@keyframes rotating': {
                            from: {
                                transform: `rotate(${petal.rotation}deg)`,
                            },
                            to: {
                                transform: `rotate(${petal.rotation + 360}deg)`,
                            },
                        },
                    }}
                />
            ))}
        </Box>
    );
};

export default SakuraEffect; 