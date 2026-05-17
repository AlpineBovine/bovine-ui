import { useState } from 'react';

import {
  Button,
  BullHeadWireframe,
  Checkbox,
  Label,
  Link,
  Modal,
  RadioButton,
  RadioGroupComponent,
  Switch,
  TextArea,
  TextField,
  Tooltip,
  Typography,
} from './components';
import './App.css';

function App() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

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
          <Tooltip content="Tooltips wrap interactive controls." placement="bottom">
            <Button primary label="Primary action" onPress={() => setIsPreviewOpen(true)} />
          </Tooltip>
          <Button label="Secondary action" onPress={() => setIsPreviewOpen(true)} />
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

          <TextArea label="Notes" placeholder="Add care notes" rows={5} />

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

        <aside className="app-panel app-panel--brand">
          <div className="app-panel-header">
            <Typography as="h2" variant="title">
              Brand mark
            </Typography>
            <Typography variant="caption">A wireframe bull head component rendered as SVG.</Typography>
          </div>

          <BullHeadWireframe className="app-bull-head" />
        </aside>
      </section>

      <Modal title="Modal" isOpen={isPreviewOpen} onClose={() => setIsPreviewOpen(false)} closeButtonLabel="Close">
        <Typography variant="body">This modal is rendered with the library Modal and Button components.</Typography>
      </Modal>
    </main>
  );
}

export default App;
