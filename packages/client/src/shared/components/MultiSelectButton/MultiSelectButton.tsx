import React, { useState } from 'react';
import { useSelect } from 'downshift';
import SvgArrowRight from 'src/shared/assets/icons/ArrowRight';
import styled from 'styled-components';
import { Button } from '../Button';
import { Badge } from '../Badge';

const Wrapper = styled.div`
  position: relative;
`;

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  background-color: transparent;
  color: rgb(66, 82, 110);

  &:hover,
  &:active {
    background-color: rgba(9, 30, 66, 0.08);
  }
`;

const StyledBadge = styled(Badge)<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? 'none' : 'inline-block')};
  margin-left: 0.4rem;
`;

const StyledList = styled.ul<{ isOpen: boolean }>`
  visibility: ${({ isOpen }) => (isOpen ? 'visable' : 'hidden')};
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 100;
  transform: translate3d(0px, 45px, 0px);
  background: rgb(255, 255, 255);
  border-radius: 3px;
  box-shadow: rgb(9 30 66 / 25%) 0px 4px 8px -2px,
    rgb(9 30 66 / 31%) 0px 0px 1px;
  box-sizing: border-box;
  overflow: auto;
  padding: 4px 0px;
  max-height: 90vh;
  padding-bottom: 0.8rem;
  padding-top: 0.8rem;
  min-width: 16.8rem;
  max-width: 28.8rem;
`;

const StyledListItem = styled.li<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  padding: 0.4rem 1.2rem 0.4rem 1.6rem;
  width: 100%;
  font-size: 1.4rem;
  background-color: ${({ isActive }) => (isActive ? 'red' : null)};

  span {
    padding-right: 0.4rem;
  }
`;

const defaultItems = ['to jest epik 3', 'project2'];

function stateReducer(state: any, actionAndChanges: any) {
  const { changes, type } = actionAndChanges;
  switch (type) {
    case useSelect.stateChangeTypes.MenuKeyDownEnter:
    case useSelect.stateChangeTypes.MenuKeyDownSpaceButton:
    case useSelect.stateChangeTypes.ItemClick:
      return {
        ...changes,
        isOpen: true, // keep menu open after selection.
        highlightedIndex: state.highlightedIndex,
      };
    default:
      return changes;
  }
}

function MultiSelectButton({
  items = defaultItems,
}: {
  items?: Array<string>;
}) {
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    items,
    stateReducer,
    selectedItem: null,
    onSelectedItemChange: ({ selectedItem }) => {
      if (!selectedItem) {
        return;
      }
      const index = selectedItems.indexOf(selectedItem);
      if (index > 0) {
        setSelectedItems([
          ...selectedItems.slice(0, index),
          ...selectedItems.slice(index + 1),
        ]);
      } else if (index === 0) {
        setSelectedItems([...selectedItems.slice(1)]);
      } else {
        setSelectedItems([...selectedItems, selectedItem]);
      }
    },
  });

  const BadgeText = selectedItems.length ?? null;

  const handleSelectedItems = (item: any) => {
    console.log(item, 'slected item');
  };
  return (
    <Wrapper>
      <StyledButton label="Epik" type="button" {...getToggleButtonProps()}>
        <StyledBadge isVisible={BadgeText === 0}>{BadgeText}</StyledBadge>
        <SvgArrowRight />
      </StyledButton>
      <StyledList isOpen={isOpen} {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => (
            <StyledListItem
              isActive={highlightedIndex === index}
              key={`${item}`}
              {...getItemProps({
                item,
                index,
              })}
            >
              <input
                type="checkbox"
                checked={selectedItems.includes(item)}
                value={item}
                onChange={() => handleSelectedItems(item)}
              />
              <span />
              {item}
            </StyledListItem>
          ))}
      </StyledList>
    </Wrapper>
  );
}

export { MultiSelectButton };

// const [inputItems, setInputItems] = useState(items);
//   const [selectedItems, setSelectedItems] = useState<any[]>([]);

//   console.log(inputItems, 'dupa');

//   console.log(selectedItems);

//   const {
//     isOpen,
//     getToggleButtonProps,
//     getLabelProps,
//     getMenuProps,
//     getInputProps,
//     getComboboxProps,
//     highlightedIndex,
//     getItemProps,
//   } = useCombobox({
//     items: inputItems,
//     onSelectedItemChange: ({ selectedItem }) => {
//       console.log(selectedItem);

//       if (!selectedItem) {
//         return;
//       }
//       const index = selectedItems.indexOf(selectedItem);
//       if (index > 0) {
//         setSelectedItems([
//           ...selectedItems.slice(0, index),
//           ...selectedItems.slice(index + 1),
//         ]);
//       } else if (index === 0) {
//         setSelectedItems([...selectedItems.slice(1)]);
//       } else {
//         setSelectedItems([...selectedItems, selectedItem]);
//       }
//     },
//     selectedItem: null,
//     stateReducer: (state, actionAndChanges) => {
//       const { changes, type } = actionAndChanges;
//       console.log(changes);
//       switch (type) {
//         case useCombobox.stateChangeTypes.InputKeyDownEnter:
//         case useCombobox.stateChangeTypes.ItemClick:
//           return {
//             ...changes,
//             isOpen: true, // keep menu open after selection.
//             highlightedIndex: state.highlightedIndex,
//           };

//         default:
//           return changes;
//       }
//     },
//   });
//   const numberOfSelectedItems = selectedItems.length ?? null;

//   return (
//     <Wrapper>
//       <input {...getInputProps({ disabled: true })} />
//       <div {...getComboboxProps()}>
//         <StyledButton
//           type="button"
//           {...getToggleButtonProps()}
//           aria-label="toggle menu"
//         >
//           <span>Epik</span>
//           <Badge>{numberOfSelectedItems}</Badge>
//           <SvgArrowRight />
//         </StyledButton>
//       </div>
//       <StyledList {...getMenuProps()}>
//         {isOpen &&
//           inputItems.map((item, index) => (
//             <StyledListItem
//               style={
//                 highlightedIndex === index ? { backgroundColor: '#bde4ff' } : {}
//               }
//               key={`${item}`}
//               {...getItemProps({
//                 item,
//                 index,
//               })}
//             >
//               <input
//                 type="checkbox"
//                 checked={selectedItems.includes(item)}
//                 value={item}
//                 onChange={() => null}
//               />
//               <span />
//               {item}
//             </StyledListItem>
//           ))}
//       </StyledList>
//     </Wrapper>
//   );
