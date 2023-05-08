/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {FC, useEffect, useState} from 'react';
import './SearchPage.css';
import { InputComponent } from '../components/InputComponent';
import { AdvisorComponent } from '../components/AdvisorComponent';
import { ProTipComponent } from '../components/ProTipComponent';
import { AdvancedOptionsComponent } from '../components/AdvancedOptionsComponent';
import { useCont } from "../hooks/ContextHook";

import HeadingSquare from '../assets/svg/heading-square.svg';
import InfoCircle from '../assets/svg/info-circle.svg';
import Lightbulb from '../assets/svg/lightbulb-02.svg';
import List1Icon from '../assets/svg/list-1.svg';
import ListIcon from '../assets/svg/list.svg';
import Mail from '../assets/svg/mail-02.svg';
import Menu from '../assets/svg/menu-05.svg';
import MultiParagraphSquare from '../assets/svg/multi-paragraph-square.svg';
import ParagraphSquare from '../assets/svg/paragraph-square.svg';

interface ListOption {
  text: string;
  iconUri: string;
}

/**
 * Hardcoded list of menu items and their icons from the design
 */
const listOptions: ListOption[] = [
  ['outline for a', ListIcon],
  ['bullet list of', List1Icon],
  ['headline for a', HeadingSquare],
  ['paragraph about', ParagraphSquare],
  ['couple paragraphs about', MultiParagraphSquare],
  ['sentence about', Menu],
  ['few ideas for', Lightbulb],
  ['bit of information about', InfoCircle],
  ['email to', Mail],
].map((lo) => ({ text: lo[0], iconUri: lo[1] }));

export const SearchPage: FC = () => {
  const { inputValue } = useCont();
  const [ options, setOptions] = useState<ListOption[]>(listOptions)

  useEffect(() => {
    setOptions(listOptions.filter(item => item.text.includes(inputValue)))
  }, [inputValue])
  
  return (
    <div className="Container">
      <InputComponent />
      <AdvisorComponent listOptions={options}/>
      {(options.length < 2) && <ProTipComponent />}
      <AdvancedOptionsComponent />
    </div>
  )
};
