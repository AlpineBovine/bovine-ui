import { useEffect, useState } from 'react';
import type { Key } from 'react-aria-components';

import {
  Accordion,
  AccordionDisclosure,
  Button,
  BullHeadFilled,
  BullHeadWireframe,
  Checkbox,
  FormField,
  Label,
  Link,
  Menu,
  MenuItem,
  MenuTrigger,
  Modal,
  Notification,
  ProgressBar,
  RadioButton,
  RadioGroupComponent,
  Select,
  SelectItem,
  Slider,
  Switch,
  Tabs,
  TextArea,
  TextField,
  Tooltip,
  ToastRegion,
  Typography,
  notify,
} from './components';
import './App.css';

function App() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const handleThemeChange = (key: Key | null) => {
    if (key) {
      setTheme(String(key));
    }
  };

  const tabItems = [
    {
      id: 'overview',
      label: 'Overview',
      content: <Typography variant="body">A compact herd summary with health and location signals.</Typography>,
    },
    {
      id: 'care',
      label: 'Care',
      content: <Typography variant="body">Track feeding, treatment, and handling notes in one place.</Typography>,
    },
    {
      id: 'history',
      label: 'History',
      content: <Typography variant="body">Review recent changes before making field decisions.</Typography>,
    },
  ];

  const accordionItems = [
    {
      id: 'intake',
      title: 'Intake checklist',
      content: <Typography variant="body">Confirm identity, weight, and current pasture assignment.</Typography>,
    },
    {
      id: 'follow-up',
      title: 'Follow-up',
      content: <Typography variant="body">Schedule a wellness review and update shared records.</Typography>,
    },
  ];

  return (
    <main id="center" className="app-shell">
      <section className="app-hero" aria-label="Bovine UI component gallery">
        <div className="app-heading">
          <Typography as="p" variant="caption" className="app-kicker">
            Bovine UI
          </Typography>
          <Typography as="h1" variant="title" className="app-title">
            Component gallery
          </Typography>
          <Typography variant="body" className="app-description">
            A compact preview of the shared components exported by the library.
          </Typography>
        </div>

        <div className="app-actions">
          <Select
            aria-label="Theme"
            label="Theme"
            selectedKey={theme}
            onSelectionChange={handleThemeChange}
            placeholder="Choose theme"
          >
            <SelectItem id="dark" label="Dark mode" />
            <SelectItem id="light" label="Light mode" />
            <SelectItem id="terminal" label="Terminal" />
          </Select>
          <Tooltip content="Tooltips wrap interactive controls." placement="bottom">
            <Button primary label="Primary action" onPress={() => setIsPreviewOpen(true)} />
          </Tooltip>
          <Button label="Secondary action" onPress={() => setIsPreviewOpen(true)} />
          <MenuTrigger triggerLabel="Actions">
            <Menu onAction={(key) => console.log(key)}>
              <MenuItem id="export" label="Export" description="Download the current view" />
              <MenuItem id="duplicate" label="Duplicate" />
              <MenuItem id="archive" label="Archive" isDisabled />
            </Menu>
          </MenuTrigger>
        </div>
      </section>

      <section className="app-grid" aria-label="Component examples">
        <div className="app-panel app-panel--form">
          <div className="app-panel-header">
            <Typography as="h2" variant="title">
              Inputs
            </Typography>
            <Typography variant="caption">Text entry, selection, and toggle controls.</Typography>
          </div>

          <div className="app-field-group">
            <Label required>Name</Label>
            <TextField aria-label="Name" placeholder="Bessie" />
          </div>

          <FormField id="tag-id" label="Tag ID" description="Use the printed ear tag when available.">
            <TextField aria-label="Tag ID" placeholder="A-104" />
          </FormField>

          <TextArea label="Notes" placeholder="Add care notes" rows={5} />

          <Select label="Pasture" placeholder="Choose pasture" defaultSelectedKey="north">
            <SelectItem id="north" label="North pasture" />
            <SelectItem id="south" label="South pasture" />
            <SelectItem id="quarantine" label="Quarantine" />
          </Select>

          <div className="app-toggle-list">
            <Checkbox defaultSelected label="Checkbox option" />
            <Switch defaultSelected label="Switch option" />
          </div>

          <RadioGroupComponent label="Radio group" defaultValue="pasture" aria-label="Radio group">
            <RadioButton value="pasture" label="Pasture" />
            <RadioButton value="barn" label="Barn" />
            <RadioButton value="yard" label="Yard" />
          </RadioGroupComponent>
        </div>

        <aside className="app-panel app-panel--controls">
          <div className="app-panel-header">
            <Typography as="h2" variant="title">
              Controls
            </Typography>
            <Typography variant="caption">Composite controls and live feedback components.</Typography>
          </div>

          <ProgressBar label="Profile completion" value={72} />
          <Slider label="Feed target" defaultValue={55} minValue={0} maxValue={100} />

          <Notification
            title="Static notification"
            description="This uses the Notification presentation component."
            variant="success"
          />

          <Button
            label="Show toast"
            onPress={() =>
              notify({
                title: 'Toast queued',
                description: 'ToastRegion renders this from the shared queue.',
                variant: 'info',
              })
            }
          />
        </aside>

        <aside className="app-panel app-panel--summary">
          <div className="app-panel-header">
            <Typography as="h2" variant="title">
              Text and links
            </Typography>
            <Typography variant="caption">Typography variants and the shared Link component.</Typography>
          </div>

          <Typography variant="body">
            Body text uses the same theme tokens as controls, so examples stay aligned with the design system.
          </Typography>

          <Typography variant="caption">
            Read more in the{' '}
            <Link href="https://react-spectrum.adobe.com/react-aria/components.html" target="_blank">
              React Aria docs
            </Link>
            .
          </Typography>
        </aside>

        <section className="app-panel app-panel--disclosure">
          <div className="app-panel-header">
            <Typography as="h2" variant="title">
              Navigation
            </Typography>
            <Typography variant="caption">Tabs and disclosure patterns for grouped content.</Typography>
          </div>

          <Tabs tabs={tabItems} label="Record views" />
          <Accordion items={accordionItems} defaultExpandedKeys={['intake']} />
          <AccordionDisclosure title="Standalone disclosure">
            <Typography variant="body">AccordionDisclosure is exported for one-off disclosure rows.</Typography>
          </AccordionDisclosure>
        </section>

        <aside className="app-panel app-panel--brand">
          <div className="app-panel-header">
            <Typography as="h2" variant="title">
              Brand mark
            </Typography>
            <Typography variant="caption">Wireframe and filled bull head components rendered as SVG.</Typography>
          </div>

          <div className="app-brand-marks">
            <BullHeadWireframe className="app-bull-head" />
            <BullHeadFilled className="app-bull-head" />
          </div>
        </aside>
      </section>

      <Modal title="Modal" isOpen={isPreviewOpen} onClose={() => setIsPreviewOpen(false)} closeButtonLabel="Close">
        <Typography variant="body">This modal is rendered with the library Modal and Button components.</Typography>
      </Modal>
      <ToastRegion />
    </main>
  );
}

export default App;
