import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import React from 'react';
import Button from '../../fundamentals/button';
import StatusIndicator from '../../fundamentals/status-indicator';

type StatusSelectorProps = {
    isDraft: boolean;
    activeState: string;
    draftState: string;
    onChange: () => void;
};

const StatusSelector: React.FC<StatusSelectorProps> = ({
    isDraft,
    draftState,
    activeState,
    onChange
}) => {
    return (
        <div>
            <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                    <Button variant="ghost" size="small">
                        <StatusIndicator
                            title={isDraft ? draftState : activeState}
                            variant={isDraft ? 'default' : 'active'}
                        />
                    </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content
                    sideOffset={5}
                    className="z-30 min-w-[200px] rounded-rounded border border-grey-20 bg-grey-0 p-xsmall shadow-dropdown"
                >
                    <DropdownMenu.Item>
                        {
                            <Button
                                variant="ghost"
                                size="small"
                                className="w-full justify-start"
                                onClick={onChange}
                            >
                                <StatusIndicator
                                    title={!isDraft ? draftState : activeState}
                                    variant={!isDraft ? 'default' : 'active'}
                                />
                            </Button>
                        }
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Root>
        </div>
    );
};

export default StatusSelector;
