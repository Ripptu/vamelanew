'use client'
import { motion, Variants } from 'framer-motion';
import React from 'react';

interface ImageRevealProps {
    leftImage: string;
    middleImage: string;
    rightImage: string;
    onLeftClick?: () => void;
    onMiddleClick?: () => void;
    onRightClick?: () => void;
}

export default function ImageReveal({ leftImage, middleImage, rightImage, onLeftClick, onMiddleClick, onRightClick }: ImageRevealProps) {
    const containerVariants: Variants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                delay: 0.2,
                staggerChildren: 0.2,
            }
        }
    };

    const leftImageVariants: Variants = {
        initial: { rotate: 0, x: 0, y: 0 },
        animate: {
            rotate: -8,
            x: -150,
            y: 10,
            transition: {
                type: "spring" as const,
                stiffness: 120,
                damping: 12
            }
        },
        hover: {
            rotate: 1,
            x: -160,
            y: 0,
            transition: {
                type: "spring" as const,
                stiffness: 200,
                damping: 15
            }
        }
    };

    const middleImageVariants: Variants = {
        initial: { rotate: 0, x: 0, y: 0 },
        animate: {
            rotate: 6,
            x: 0,
            y: 0,
            transition: {
                type: "spring" as const,
                stiffness: 120,
                damping: 12
            }
        },
        hover: {
            rotate: 0,
            x: 0,
            y: -10,
            transition: {
                type: "spring" as const,
                stiffness: 200,
                damping: 15
            }
        }
    };

    const rightImageVariants: Variants = {
        initial: { rotate: 0, x: 0, y: 0 },
        animate: {
            rotate: -6,
            x: 200,
            y: 20,
            transition: {
                type: "spring" as const,
                stiffness: 120,
                damping: 12
            }
        },
        hover: {
            rotate: 3,
            x: 200,
            y: 10,
            transition: {
                type: "spring" as const,
                stiffness: 200,
                damping: 15
            }
        }
    };

    return (
        <motion.div
            className="relative flex items-center justify-center w-64 h-64 my-12 mx-auto"
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
        >
            {/* Left Image - Lowest z-index */}
            <motion.div
                className="absolute w-48 h-48 origin-bottom-right overflow-hidden rounded-xl shadow-lg bg-white cursor-pointer"
                variants={leftImageVariants}
                whileHover="hover"
                animate="animate"
                style={{ zIndex: 30 }}
                onClick={onLeftClick}
            >
                <img
                    src={leftImage}
                    alt="Left image"
                    className="object-cover w-full h-full p-2 rounded-xl"
                />
            </motion.div>

            {/* Middle Image - Middle z-index */}
            <motion.div
                className="absolute w-48 h-48 origin-bottom-left overflow-hidden rounded-xl shadow-lg bg-white cursor-pointer"
                variants={middleImageVariants}
                whileHover="hover"
                animate="animate"
                style={{ zIndex: 20 }}
                onClick={onMiddleClick}
            >
                <img
                    src={middleImage}
                    alt="Middle image"
                    className="object-cover w-full h-full p-2 rounded-2xl"
                />
            </motion.div>

            {/* Right Image - Highest z-index */}
            <motion.div
                className="absolute w-48 h-48 origin-bottom-right overflow-hidden rounded-xl shadow-lg bg-white cursor-pointer"
                variants={rightImageVariants}
                whileHover="hover"
                animate="animate"
                style={{ zIndex: 10 }}
                onClick={onRightClick}
            >
                <img
                    src={rightImage}
                    alt="Right image"
                    className="object-cover w-full h-full p-2 rounded-2xl"
                />
            </motion.div>
        </motion.div>
    );
}
