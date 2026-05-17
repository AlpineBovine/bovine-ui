import {
    Label,
    Slider as AriaSlider,
    SliderOutput,
    SliderThumb,
    SliderTrack,
} from 'react-aria-components';
import type { SliderProps as AriaSliderProps } from 'react-aria-components';

import { Typography } from '../Typography/Typography';
import './slider.css';

export interface SliderProps extends AriaSliderProps {
    label?: string;
}

export const Slider = ({ label, ...props }: SliderProps) => {
    return (
        <AriaSlider className="slider" {...props}>
            {(renderProps) => (
                <>
                    {(label || renderProps.state) && (
                        <div className="slider-header">
                            {label && (
                                <Label className="slider-label">
                                    <Typography as="span" variant="body">
                                        {label}
                                    </Typography>
                                </Label>
                            )}
                            <SliderOutput className="slider-output" />
                        </div>
                    )}
                    <SliderTrack className="slider-track">
                        {({ state }) => (
                            <>
                                <div
                                    className="slider-fill"
                                    style={{ width: `${state.getThumbPercent(0) * 100}%` }}
                                />
                                <SliderThumb className="slider-thumb" />
                            </>
                        )}
                    </SliderTrack>
                </>
            )}
        </AriaSlider>
    );
};
