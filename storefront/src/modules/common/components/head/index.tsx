import NextHead from 'next/head';
import React from 'react';

type HeadProps = {
    title?: string;
    description?: string | null;
    image?: string | null;
};

const Head: React.FC<HeadProps> = ({ title, description, image }) => {
    return (
        <NextHead>
            <title>{title} | LELO | Authentic Brazilian Jewelry</title>
            <meta itemProp="name" content={title} />
            {description && (
                <meta itemProp="description" content={description} />
            )}
            {image && <meta itemProp="image" content={image} />}
            <link rel="icon" href="/favicon-32x32.png" />
        </NextHead>
    );
};

export default Head;
