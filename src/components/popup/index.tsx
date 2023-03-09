
import React from "react";
import { PopupContainer, PopupInner} from './style';

interface PopupProps {
    trigger: boolean;
    setTrigger: (value: boolean) => void;
    children: React.ReactNode;
  }

  export const Popup = ({ trigger, setTrigger, children }: PopupProps): React.ReactElement => {
    return trigger ? (
      <PopupContainer>
        <PopupInner>
          <button className="close-btn" onClick={() => setTrigger(false)}>x</button>
          {children}
        </PopupInner>
      </PopupContainer>
    ) : (
      <></>
    );
  };