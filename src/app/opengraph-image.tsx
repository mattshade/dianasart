import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Flow Art Wellness Workshop'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: '#FDFCFB',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    style={{ width: '500px', height: '500px' }}
                >
                    <defs>
                        <linearGradient id="flow1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#6B9AC4" stopOpacity="1" />
                            <stop offset="50%" stopColor="#85B2D9" stopOpacity="1" />
                            <stop offset="100%" stopColor="#B8D8F0" stopOpacity="1" />
                        </linearGradient>
                        <linearGradient id="flow2" x1="100%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#C4B5A7" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#9B8B7E" stopOpacity="0.8" />
                        </linearGradient>
                    </defs>

                    {/* Background circle */}
                    <circle cx="50" cy="50" r="48" fill="#FDFCFB" />

                    {/* Flow art waves */}
                    <path d="M 20 35 Q 30 25, 40 35 T 60 35 T 80 35"
                        fill="none" stroke="url(#flow1)" strokeWidth="6" strokeLinecap="round" opacity="0.9" />
                    <path d="M 15 50 Q 28 40, 41 50 T 67 50 T 93 50"
                        fill="none" stroke="url(#flow1)" strokeWidth="5" strokeLinecap="round" opacity="0.7" />
                    <path d="M 20 65 Q 35 55, 50 65 T 80 65"
                        fill="none" stroke="url(#flow2)" strokeWidth="4" strokeLinecap="round" opacity="0.6" />

                    {/* Circular border */}
                    <circle cx="50" cy="50" r="48" fill="none" stroke="#6B9AC4" strokeWidth="2" opacity="0.3" />

                    {/* Serif lowercase d */}
                    <text x="50" y="62"
                        dominantBaseline="middle"
                        textAnchor="middle"
                        fontSize="110"
                        fill="#4A4845"
                        fontWeight="500"
                        style={{ fontFamily: 'Times New Roman, serif' }}>d</text>
                </svg>
            </div>
        ),
        {
            ...size,
        }
    )
}
