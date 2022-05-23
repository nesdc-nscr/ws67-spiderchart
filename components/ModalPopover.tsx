import { Children, FC, ReactNode, useState } from "react";
import { Image, Modal, Button, Group, Tooltip } from "@mantine/core";

interface IModalPopover {
    title: string;
    children: ReactNode
    buttonLabel: string;
}


const ModalPopover:FC<IModalPopover> =({ title, children, buttonLabel })=> {
  const [modalOpened1, setModalOpened1] = useState(false);
//   const [modalOpened2, setModalOpened2] = useState(false);
//   const [modalOpened3, setModalOpened3] = useState(false);
//   const [modalOpened4, setModalOpened4] = useState(false);
//   const [modalOpened5, setModalOpened5] = useState(false);
//   const [modalOpened6, setModalOpened6] = useState(false);
//   const [modalOpened7, setModalOpened7] = useState(false);
  
  return (
    <>
  <Modal
        id='1'
        opened={modalOpened1}
        onClose={() => setModalOpened1(false)}
        title={title}
        size="full"
      >
        {/* <Image src="q-criteria-description\q1-description.png" alt="q1" /> */}
        {children}
      </Modal>
      <Group position="center">
        <Tooltip label={buttonLabel} withArrow>
          <Button onClick={() => setModalOpened1(true)} variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35}} size="xs">?</Button>
        </Tooltip>
      </Group>
    </>

//       <Modal
//         id='2'
//         opened={modalOpened2}
//         onClose={() => setModalOpened2(false)}
//         title="เกณฑ์การให้คะแนน ข้อที่ 2"
//         size="full"
//       >
//         <Image src="q-criteria-description\q2-description.png" alt="q2" />
//       </Modal>
//       <Group position="center">
//         <Tooltip label="รายละเอียดเกณฑ์ข้อที่ 2" withArrow>
//           <Button onClick={() => setModalOpened2(true)} variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35}} size="xs">?</Button>
//         </Tooltip>
//       </Group>

//        <Modal
//         id='3'
//       opened={modalOpened3}
//       onClose={() => setModalOpened3(false)}
//       title="เกณฑ์การให้คะแนน ข้อที่3"
//       size="full"
//     >
//       <Image src="q-criteria-description\q2-description.png" alt="q2" />
//     </Modal>
//     <Group position="center">
//       <Tooltip label="รายละเอียดเกณฑ์ข้อที่ 3" withArrow>
//         <Button onClick={() => setModalOpened3(true)} variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35}} size="xs">?</Button>
//       </Tooltip>
//     </Group>

//    <Modal
//         id='4'
//         opened={modalOpened4}
//         onClose={() => setModalOpened4(false)}
//         title="เกณฑ์การให้คะแนน ข้อที่4"
//         size="full"
//       >
//         <Image src="q-criteria-description\q4-description.png" alt="q4" />
//       </Modal>
//       <Group position="center">
//         <Tooltip label="รายละเอียดเกณฑ์ข้อที่ 4" withArrow>
//           <Button onClick={() => setModalOpened4(true)} variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35}} size="xs">?</Button>
//         </Tooltip>
//       </Group>

//       <Modal
//         id='5'
//         opened={modalOpened5}
//         onClose={() => setModalOpened5(false)}
//         title="เกณฑ์การให้คะแนน ข้อที่ 5"
//         size="full"
//       >
//         <Image src="q-criteria-description\q5-description.png" alt="q5" />
//       </Modal>
//       <Group position="center">
//         <Tooltip label="รายละเอียดเกณฑ์ข้อที่ 5" withArrow>
//           <Button onClick={() => setModalOpened5(true)} variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35}} size="xs">?</Button>
//         </Tooltip>
//       </Group>

//       <Modal
//         id='6'
//         opened={modalOpened6}
//         onClose={() => setModalOpened6(false)}
//         title="เกณฑ์การให้คะแนน ข้อที่ 6"
//         size="full"
//       >
//         <Image src="q-criteria-description\q6-description.png" alt="q6" />
//       </Modal>
//       <Group position="center">
//         <Tooltip label="รายละเอียดเกณฑ์ข้อที่ 6" withArrow>
//           <Button onClick={() => setModalOpened6(true)} variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35}} size="xs">?</Button>
//         </Tooltip>
//       </Group>
    // </>
  );
}
export default ModalPopover;
