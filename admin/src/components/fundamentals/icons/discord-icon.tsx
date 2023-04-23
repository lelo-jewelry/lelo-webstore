import React from 'react';
import IconProps from './types/icon-type';

const DiscordIcon: React.FC<IconProps> = ({
    size = '16',
    color = 'currentColor',
    ...attributes
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...attributes}
        >
            <path
                d="M18.9308 5.63282C17.6561 5.04792 16.2892 4.61699 14.8599 4.37018C14.8339 4.36541 14.8079 4.37732 14.7945 4.40112C14.6187 4.7138 14.4239 5.12172 14.2876 5.44234C12.7503 5.2122 11.221 5.2122 9.71527 5.44234C9.57887 5.11459 9.37707 4.7138 9.20048 4.40112C9.18707 4.37811 9.16107 4.36621 9.13504 4.37018C7.70659 4.6162 6.33963 5.04713 5.06411 5.63282C5.05307 5.63758 5.04361 5.64552 5.03732 5.65583C2.44449 9.52947 1.73421 13.3079 2.08265 17.0395C2.08423 17.0577 2.09447 17.0752 2.10867 17.0863C3.81934 18.3426 5.47642 19.1052 7.10273 19.6108C7.12876 19.6187 7.15634 19.6092 7.1729 19.5877C7.55761 19.0624 7.90054 18.5085 8.19456 17.9259C8.21192 17.8918 8.19535 17.8513 8.15989 17.8378C7.61594 17.6315 7.098 17.3799 6.59977 17.0942C6.56037 17.0712 6.55721 17.0148 6.59347 16.9879C6.69831 16.9093 6.80318 16.8275 6.9033 16.745C6.92141 16.7299 6.94665 16.7268 6.96794 16.7363C10.2411 18.2307 13.7846 18.2307 17.0191 16.7363C17.0404 16.726 17.0657 16.7292 17.0846 16.7442C17.1847 16.8268 17.2895 16.9093 17.3952 16.9879C17.4314 17.0148 17.4291 17.0712 17.3897 17.0942C16.8914 17.3855 16.3735 17.6315 15.8288 17.837C15.7933 17.8505 15.7775 17.8918 15.7949 17.9259C16.0952 18.5076 16.4381 19.0616 16.8157 19.587C16.8315 19.6092 16.8599 19.6187 16.8859 19.6108C18.5201 19.1052 20.1772 18.3426 21.8879 17.0863C21.9028 17.0752 21.9123 17.0585 21.9139 17.0403C22.3309 12.7261 21.2154 8.9787 18.9568 5.65662C18.9513 5.64552 18.9419 5.63758 18.9308 5.63282ZM8.68335 14.7673C7.69792 14.7673 6.88594 13.8626 6.88594 12.7515C6.88594 11.6405 7.68217 10.7358 8.68335 10.7358C9.69239 10.7358 10.4965 11.6484 10.4807 12.7515C10.4807 13.8626 9.68451 14.7673 8.68335 14.7673ZM15.329 14.7673C14.3435 14.7673 13.5316 13.8626 13.5316 12.7515C13.5316 11.6405 14.3278 10.7358 15.329 10.7358C16.338 10.7358 17.1421 11.6484 17.1264 12.7515C17.1264 13.8626 16.338 14.7673 15.329 14.7673Z"
                fill={color}
            />
        </svg>
    );
};

export default DiscordIcon;
