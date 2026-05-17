import { useState } from 'react';

import {
  Button,
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
  const [formName, setFormName] = useState('Bessie');
  const [notes, setNotes] = useState('Prefers calm mornings and fresh pasture.');
  const [isFeatured, setIsFeatured] = useState(true);
  const [acceptsUpdates, setAcceptsUpdates] = useState(true);
  const [herdRole, setHerdRole] = useState('grazer');
  const [saveCount, setSaveCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main id="center" className="app-shell">
      <section className="app-hero" aria-label="Bovine UI component gallery">
        <div className="app-heading">
          <Typography as="p" variant="caption" className="app-kicker">
            Bovine UI library
          </Typography>
          <Typography as="h1" variant="title" className="app-title">
            Component gallery
          </Typography>
          <Typography variant="body" className="app-description">
            A single screen using every exported component in the library, wired together as a small profile editor.
          </Typography>
        </div>

        <div className="app-actions">
          <Tooltip content="The primary Button increments the saved counter." placement="bottom">
            <Button primary label="Save profile" onPress={() => setSaveCount((value) => value + 1)} />
          </Tooltip>
          <Button label="Preview modal" onPress={() => setIsModalOpen(true)} />
        </div>
      </section>

      <section className="app-grid" aria-label="Component examples">
        <div className="app-panel app-panel--form">
          <div className="app-panel-header">
            <Typography as="h2" variant="title">
              Form controls
            </Typography>
            <Typography variant="caption">TextField, TextArea, Label, Checkbox, Switch, and RadioButton.</Typography>
          </div>

          <div className="app-field-group">
            <Label required>Profile name</Label>
            <TextField
              aria-label="Profile name"
              value={formName}
              onChange={setFormName}
              placeholder="Enter a profile name"
            />
          </div>

          <TextArea
            label="Care notes"
            value={notes}
            onChange={setNotes}
            placeholder="Add notes for the profile"
            rows={5}
          />

          <div className="app-toggle-list">
            <Checkbox isSelected={acceptsUpdates} onChange={setAcceptsUpdates} label="Receive pasture updates" />
            <Switch isSelected={isFeatured} onChange={setIsFeatured} label="Feature this profile" />
          </div>

          <RadioGroupComponent
            label="Herd role"
            value={herdRole}
            onChange={setHerdRole}
            aria-label="Herd role"
          >
            <RadioButton value="grazer" label="Grazer" />
            <RadioButton value="leader" label="Trail leader" />
            <RadioButton value="observer" label="Fence observer" />
          </RadioGroupComponent>
        </div>

        <aside className="app-panel app-panel--summary">
          <div className="app-panel-header">
            <Typography as="h2" variant="title">
              Live summary
            </Typography>
            <Typography variant="caption">Typography and Link keep supporting text consistent.</Typography>
          </div>

          <dl className="summary-list">
            <div>
              <dt>Name</dt>
              <dd>{formName || 'Unnamed profile'}</dd>
            </div>
            <div>
              <dt>Role</dt>
              <dd>{herdRole}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{isFeatured ? 'Featured' : 'Standard'}</dd>
            </div>
            <div>
              <dt>Updates</dt>
              <dd>{acceptsUpdates ? 'Enabled' : 'Paused'}</dd>
            </div>
          </dl>

          <Typography variant="body">{notes}</Typography>

          <Typography variant="caption">
            Saved {saveCount} {saveCount === 1 ? 'time' : 'times'}. View the{' '}
            <Link href="https://react-spectrum.adobe.com/react-aria/components.html" target="_blank">
              React Aria docs
            </Link>
            .
          </Typography>
        </aside>
      </section>

      <Modal
        title="Profile preview"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        closeButtonLabel="Done"
      >
        <Typography variant="body">
          {formName || 'Unnamed profile'} is marked as {isFeatured ? 'featured' : 'standard'} with the {herdRole} role.
        </Typography>
      </Modal>
    </main>
  );
}

export default App;
