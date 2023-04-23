import * as Dropdown from '@radix-ui/react-dropdown-menu';
import clsx from 'clsx';
import React, { Children, HTMLAttributes, useMemo } from 'react';
import { Toast } from 'react-hot-toast';
import Spinner from '../../atoms/spinner';
import ChevronDownIcon from '../../fundamentals/icons/chevron-down';
import RefreshIcon from '../../fundamentals/icons/refresh-icon';

type FormToasterContainerProps = {
    toast?: Toast;
    isLoading?: boolean;
    loadingMessage?: string;
    unsavedChangesMessage?: string;
    icon?: React.ReactNode;
};

type MultiActionButtonProps = {
    actions: {
        onClick: () => void | Promise<void>;
        label: string;
        icon?: any;
    }[];
    className?: string;
};

const FormToasterContainer: React.FC<FormToasterContainerProps> & {
    Actions: React.FC;
    DiscardButton: React.FC<HTMLAttributes<HTMLButtonElement>>;
    ActionButton: React.FC<HTMLAttributes<HTMLButtonElement>>;
    MultiActionButton: React.FC<MultiActionButtonProps>;
} = ({
    children,
    toast,
    isLoading = false,
    loadingMessage = 'Hang on, this may take a few moments...',
    unsavedChangesMessage = 'You have unsaved changes',
    icon = <RefreshIcon size="20" />
}) => {
    const content = useMemo(() => {
        if (isLoading) {
            return (
                <div className="flex items-center gap-x-base p-base">
                    <span>
                        <Spinner />
                    </span>
                    <span className="inter-small-regular">
                        {loadingMessage}
                    </span>
                </div>
            );
        } else {
            return (
                <>
                    <div className="flex items-center gap-x-base p-base">
                        <span>{icon}</span>
                        <span className="inter-small-regular">
                            {unsavedChangesMessage}
                        </span>
                    </div>
                    {children}
                </>
            );
        }
    }, [isLoading, children]);

    return (
        <div
            className={clsx({
                'animate-enter': toast?.visible,
                'animate-leave': !toast?.visible
            })}
            {...toast?.ariaProps}
        >
            <div className="flex h-[72px] w-[344px] items-center justify-between rounded-rounded bg-grey-90 text-grey-0">
                {content}
            </div>
        </div>
    );
};

const Actions: React.FC = ({ children }) => {
    return (
        <div className="h-full border-l border-grey-70">
            {Children.map(children, (child) => {
                return (
                    <div className="flex h-1/2 w-[72px] items-center justify-center border-b border-grey-70 last:border-none">
                        {child}
                    </div>
                );
            })}
        </div>
    );
};

const DiscardButton: React.FC<HTMLAttributes<HTMLButtonElement>> = ({
    children,
    className,
    ...props
}) => {
    return (
        <button
            className={clsx(
                'inter-small-semibold flex h-full w-full items-center justify-center text-white',
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

const ActionButton: React.FC<HTMLAttributes<HTMLButtonElement>> = ({
    children,
    className,
    ...props
}) => {
    return (
        <button
            className={clsx(
                'inter-small-semibold flex h-full w-full items-center justify-center text-white',
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

const MultiActionButton: React.FC<MultiActionButtonProps> = ({
    children,
    className,
    actions
}) => {
    return (
        <Dropdown.Root>
            <Dropdown.Trigger
                className={clsx(
                    'inter-small-semibold flex h-full w-full items-center justify-center',
                    className
                )}
            >
                {children}
                <ChevronDownIcon size={16} className="ml-[2px]" />
            </Dropdown.Trigger>

            <Dropdown.Content
                className="flex min-w-[208px] flex-col rounded-rounded bg-grey-90 p-xsmall text-white"
                sideOffset={10}
            >
                {actions.map((action, i) => {
                    return (
                        <Dropdown.Item key={i}>
                            <button
                                onClick={action.onClick}
                                className="inter-small-semibold flex w-full items-center rounded-base p-2xsmall text-left hover:bg-grey-80 hover:outline-none"
                            >
                                {action.icon && (
                                    <span className="mr-xsmall text-grey-0">
                                        {React.cloneElement(action.icon, {
                                            size: 20
                                        })}
                                    </span>
                                )}
                                {action.label}
                            </button>
                        </Dropdown.Item>
                    );
                })}
            </Dropdown.Content>
        </Dropdown.Root>
    );
};

FormToasterContainer.Actions = Actions;
FormToasterContainer.DiscardButton = DiscardButton;
FormToasterContainer.ActionButton = ActionButton;
FormToasterContainer.MultiActionButton = MultiActionButton;

export default FormToasterContainer;
