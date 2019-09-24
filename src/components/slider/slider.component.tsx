import * as React from "react";
import { SliderProps } from "./slider.props";
import {
  Slider as CompoundSlider,
  Rail,
  Handles,
  Tracks
} from "react-compound-slider";

const Slider = ({
  styles,
  min = 0,
  isDisabled,
  max = 100,
  onChange,
  name,
  className,
  value
}: SliderProps) => {
  const isMulti = Array.isArray(value);

  return (
    <CompoundSlider
      mode={1}
      step={1}
      domain={[min, max]}
      rootStyle={{ position: "relative", width: "100%" }}
      onChange={values => onChange(name, isMulti ? values : (values as any)[0])}
      values={isMulti ? (value as number[]) : [value as number]}
      className={className}
    >
      <Rail>
        {({ getRailProps }) => (
          <React.Fragment>
            <div className={styles.railOuter} {...getRailProps()} />
            <div className={styles.railInner} />
          </React.Fragment>
        )}
      </Rail>
      <Handles>
        {({ handles, getHandleProps }) => (
          <div className="slider-handles">
            {handles.map(handle => (
              <React.Fragment key={handle.id}>
                <div
                  className={styles.handleOuter}
                  style={{
                    left: `${handle.percent}%`
                  }}
                  {...getHandleProps(handle.id)}
                />
                <div
                  className={styles.handleInner}
                  role="slider"
                  aria-valuemin={min}
                  aria-valuemax={max}
                  aria-valuenow={handle.value}
                  style={{
                    left: `${handle.percent}%`,

                    backgroundColor: isDisabled ? "#666" : "#ffc400"
                  }}
                />
              </React.Fragment>
            ))}
          </div>
        )}
      </Handles>
      <Tracks right={false}>
        {({ tracks, getTrackProps }) => (
          <div className="slider-tracks">
            {tracks.map(({ id, source, target }) => (
              <div
                className={styles.track}
                key={id}
                style={{
                  left: `${source.percent}%`,
                  width: `${target.percent - source.percent}%`
                }}
                {...getTrackProps()}
              />
            ))}
          </div>
        )}
      </Tracks>
    </CompoundSlider>
  );
};

export { Slider };
