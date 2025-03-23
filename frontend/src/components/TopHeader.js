import React, { useState, useEffect } from 'react';
import { COLORS, SPACING, TYPOGRAPHY } from '../constants/theme';

const TopHeader = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsVisible(scrollPosition < 100); // Ẩn header khi scroll quá 100px
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                backgroundColor: COLORS.primary.main,
                color: COLORS.text.contrast,
                padding: `${SPACING.sm} 0`,
                textAlign: 'center',
                transition: 'transform 0.3s ease-in-out',
                transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
                zIndex: 1000
            }}
        >
            <p style={{
                fontSize: TYPOGRAPHY.fontSize.sm,
                margin: 0,
                fontWeight: TYPOGRAPHY.fontWeight.medium
            }}>
                Tối ưu hóa học tập của bạn với Avocadomo - học thông minh, ghi nhớ tốt hơn
            </p>
        </div>
    );
};

export default TopHeader; 