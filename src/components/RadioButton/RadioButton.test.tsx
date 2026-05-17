import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { RadioButton, RadioGroupComponent } from './RadioButton';

describe('RadioButton', () => {
    it('renders radio button with label', () => {
        render(
            <RadioGroupComponent name="test">
                <RadioButton value="option1" label="Option 1" />
            </RadioGroupComponent>
        );

        const label = screen.getByText('Option 1');
        expect(label).not.toBeNull();
    });

    it('can be selected', async () => {
        const user = userEvent.setup();
        render(
            <RadioGroupComponent name="test" defaultValue="option1">
                <RadioButton value="option1" label="Option 1" />
                <RadioButton value="option2" label="Option 2" />
            </RadioGroupComponent>
        );

        const option1 = screen.getByRole('radio', { name: 'Option 1' }) as HTMLInputElement;
        expect(option1.checked).toBe(true);

        const option2 = screen.getByRole('radio', { name: 'Option 2' }) as HTMLInputElement;
        await user.click(option2);
        expect(option2.checked).toBe(true);
        expect(option1.checked).toBe(false);
    });

    it('works with options array', () => {
        const options = [
            { value: 'small', label: 'Small' },
            { value: 'large', label: 'Large' },
        ];
        render(<RadioGroupComponent name="size" options={options} />);

        expect(screen.getByText('Small')).not.toBeNull();
        expect(screen.getByText('Large')).not.toBeNull();
    });
});
