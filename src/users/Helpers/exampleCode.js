import React from "react";
import styled from "styled-components";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
const Pre = styled.pre`
  text-align: left;
  padding: 0.7em;
  overflow: scroll;
`;

const Line = styled.div`
  display: table-row;
`;

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

const LineContent = styled.span`
  display: table-cell;
`;
const WithLineNumbers = (props) => (
  <div style={{ width: "98%"}}>
    <Highlight
      {...defaultProps}
      theme={theme}
      code={props.code.trim()}
      language={props.language}
    
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={{...style,fontSize:15}}>
          {tokens.map((line, i) => (
            <Line key={i} {...getLineProps({ line, key: i })}>
              {props.lineNum && <LineNo>{i + 1}</LineNo>}
              <LineContent>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </LineContent>
            </Line>
          ))}
        </Pre>
      )}
    </Highlight>
  </div>
);

export default WithLineNumbers;
