import { Disclosure } from '@headlessui/react';
import { useCheckout } from '@lib/context/checkout-context';
import clsx from 'clsx';

type StepContainerProps = {
    index: number;
    title: string;
    closedState?: React.ReactNode;
    children?: React.ReactNode;
    forceClosed?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const StepContainer = ({
    index,
    title,
    className,
    closedState,
    forceClosed = undefined,
    children,
    ...props
}: StepContainerProps) => {
    const {
        editAddresses: { state }
    } = useCheckout();
    return (
        <div>
            <div
                className={clsx('bg-white', className, {
                    'opacity-50 pointer-events-none select-none': (forceClosed === undefined ? state : forceClosed)
                })}
                {...props}
            >
                <div className="text-xl-semi flex items-center gap-x-4 px-8 pb-6 pt-8">
                    <div className="bg-gray-900 w-8 h-8 rounded-full text-white flex justify-center items-center text-sm">
                        {index}
                    </div>
                    <h2>{title}:{state}</h2>
                </div>
                <Disclosure>
                    <Disclosure.Panel
                        static
                        className={clsx(
                            'transition-[max-height,opacity] duration-700 ease-in-out overflow-hidden',
                            {
                                'max-h-[9999px] opacity-100': !(forceClosed === undefined ? state : forceClosed),
                                'max-h-0 opacity-0': (forceClosed === undefined ? state : forceClosed)
                            }
                        )}
                    >
                        {children}
                    </Disclosure.Panel>
                    <Disclosure.Panel
                        static
                        className={clsx(
                            'transition-[max-height,opacity] duration-700 ease-in-out overflow-hidden',
                            {
                                'max-h-[9999px] opacity-100': (forceClosed === undefined ? state : forceClosed),
                                'max-h-0 opacity-0': !(forceClosed === undefined ? state : forceClosed)
                            }
                        )}
                    >
                        {closedState}
                    </Disclosure.Panel>
                </Disclosure>
            </div>
        </div>
    );
};

export default StepContainer;
