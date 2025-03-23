import React from 'react';
import { FOOTER_LINKS } from '../constants/navigation';
import { COLORS, SPACING, TYPOGRAPHY } from '../constants/theme';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: COLORS.background.dark, color: COLORS.text.contrast, padding: `${SPACING.xl} 0` }}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 style={{
                            fontSize: TYPOGRAPHY.fontSize.xl,
                            fontWeight: TYPOGRAPHY.fontWeight.bold,
                            marginBottom: SPACING.md
                        }}>
                            {FOOTER_LINKS.about.title}
                        </h3>
                        <p style={{ color: COLORS.text.secondary }}>
                            {FOOTER_LINKS.about.description}
                        </p>
                    </div>
                    <div>
                        <h3 style={{
                            fontSize: TYPOGRAPHY.fontSize.xl,
                            fontWeight: TYPOGRAPHY.fontWeight.bold,
                            marginBottom: SPACING.md
                        }}>
                            {FOOTER_LINKS.blogs.title}
                        </h3>
                        <ul className="space-y-2" style={{ color: COLORS.text.secondary }}>
                            {FOOTER_LINKS.blogs.links.map((link, index) => (
                                <li key={index}>
                                    <a href={link.path} style={{
                                        color: COLORS.text.secondary,
                                        ':hover': { color: COLORS.primary.light }
                                    }}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 style={{
                            fontSize: TYPOGRAPHY.fontSize.xl,
                            fontWeight: TYPOGRAPHY.fontWeight.bold,
                            marginBottom: SPACING.md
                        }}>
                            {FOOTER_LINKS.faq.title}
                        </h3>
                        <ul className="space-y-2" style={{ color: COLORS.text.secondary }}>
                            {FOOTER_LINKS.faq.links.map((link, index) => (
                                <li key={index}>
                                    <a href={link.path} style={{
                                        color: COLORS.text.secondary,
                                        ':hover': { color: COLORS.primary.light }
                                    }}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 style={{
                            fontSize: TYPOGRAPHY.fontSize.xl,
                            fontWeight: TYPOGRAPHY.fontWeight.bold,
                            marginBottom: SPACING.md
                        }}>
                            {FOOTER_LINKS.legal.title}
                        </h3>
                        <ul className="space-y-2" style={{ color: COLORS.text.secondary }}>
                            {FOOTER_LINKS.legal.links.map((link, index) => (
                                <li key={index}>
                                    <a href={link.path} style={{
                                        color: COLORS.text.secondary,
                                        ':hover': { color: COLORS.primary.light }
                                    }}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div style={{
                    borderTop: `1px solid ${COLORS.text.secondary}`,
                    marginTop: SPACING.lg,
                    paddingTop: SPACING.lg,
                    textAlign: 'center',
                    color: COLORS.text.secondary
                }}>
                    <p>© 2025 Avocadomo. All rights reserved.</p>
                    <p style={{ marginTop: SPACING.sm }}>Made with ❤️ by Avocadomo Team</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 