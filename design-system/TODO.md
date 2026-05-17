# Bovine UI React Aria Component Roadmap

This checklist lists React Aria components to implement in the Bovine UI design system. The order reflects implementation priority, based on how easy the component is to build and how commonly it is used.

## High Priority / Easy + Common
- [x] Button
- [x] Link
- [x] TextField / Input
- [x] TextArea
- [x] Checkbox
- [x] RadioButton
- [x] Switch / Toggle
- [x] Label
- [x] Tooltip
- [x] Modal / Dialog

## Medium Priority / Common + Moderate Complexity
- [x] Menu / MenuTrigger
- [x] MenuItem
- [x] Select
- [x] FormField
- [x] Tabs
- [x] Accordion
- [x] Toast / Notification
- [x] ProgressBar
- [x] Slider

## Medium-Low Priority / Moderate Complexity + Useful
- [ ] Breadcrumbs
- [ ] ContextMenu
- [ ] Popover
- [ ] FocusScope / FocusRing utilities
- [ ] Overlay / Layer
- [ ] Spinner / Loader
- [ ] FieldGroup

## Lower Priority / More Complex or Specialized
- [ ] Calendar / DatePicker
- [ ] TimeField / TimePicker
- [ ] DateRangePicker
- [ ] Combobox / Autocomplete
- [ ] Table / DataGrid
- [ ] ListBox / VirtualizedList
- [ ] TreeView
- [ ] DialogTrigger
- [ ] MenuBar
- [ ] MediaPlayer controls

## Advanced Priority / Complex Interaction Patterns
- [ ] Drag and Drop utilities
- [ ] Resizable / SplitView utilities
- [ ] Multi-select ComboBox
- [ ] Multi-level Menu
- [ ] Virtualizer integration
- [ ] Accessible focus management helpers

## Notes
- Focus first on the simple form controls and navigation primitives, then build composite widgets.
- Keep components aligned with the shared theme system and CSS variable usage.
- Prefer composable implementations that can be adapted across contexts.
