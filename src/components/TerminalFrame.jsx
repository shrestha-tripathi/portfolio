import React from 'react';
import { Sidebar } from 'primereact/sidebar';
import { terminalFrameLink } from '../constants';
const TerminalFrame = ( { visibleLeft, setVisibleLeft } ) => {
    return (  
        <Sidebar
        className="bg-zinc-400 w-full border-0"
        style={{ height: "90%" }} 
        visible={visibleLeft} position="bottom" onHide={() => setVisibleLeft(false)}
        content={({ closeIconRef, hide }) => (
          <div className="w-full h-full">
          <iframe
            className="w-full h-full"
            src={terminalFrameLink}
            title="Portfolio terminal"
          >
          </iframe>
        </div>
        )}
      >

      </Sidebar>
    );
}
 
export default TerminalFrame;