import {
    Tab as AriaTab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs as AriaTabs,
} from 'react-aria-components';
import type { TabsProps as AriaTabsProps } from 'react-aria-components';

import { Typography } from '../Typography/Typography';
import './tabs.css';

export interface TabItem {
    id: string;
    label: string;
    content: React.ReactNode;
    isDisabled?: boolean;
}

export interface TabsProps extends Omit<AriaTabsProps, 'children'> {
    tabs: TabItem[];
    label?: string;
}

export const Tabs = ({ tabs, label = 'Tabs', ...props }: TabsProps) => {
    return (
        <AriaTabs className="tabs" {...props}>
            <TabList className="tabs-list" aria-label={label}>
                {tabs.map((tab) => (
                    <AriaTab key={tab.id} id={tab.id} className="tabs-tab" isDisabled={tab.isDisabled}>
                        <Typography as="span" variant="body">
                            {tab.label}
                        </Typography>
                    </AriaTab>
                ))}
            </TabList>
            <TabPanels className="tabs-panels">
                {tabs.map((tab) => (
                    <TabPanel key={tab.id} id={tab.id} className="tabs-panel">
                        {tab.content}
                    </TabPanel>
                ))}
            </TabPanels>
        </AriaTabs>
    );
};
