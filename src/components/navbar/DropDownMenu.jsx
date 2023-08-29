import NavItem from "./NavItem";
import { useDisclosure } from "@mantine/hooks";
// import { useDisclosure } from '@mantine/hooks';
import { Drawer, Group } from "@mantine/core";
import Humberger from "./Humberger";
import { Link } from "react-router-dom";
import { LINKS } from "../../assets/Data";
import Account from "./Account";

function DropDownMenu() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        position="right"
        onClose={close}
        withCloseButton={false}
        overlayProps={{ opacity: 0.85 }}
        size="70%"
      >
        <Drawer.Header>
          <Drawer.Title className=" w-full text-center  ">
            <NavItem toggleDropDown={close}>
              <Account onClose={close} />
            </NavItem>
          </Drawer.Title>
          <Drawer.CloseButton size={"lg"} />
        </Drawer.Header>
        <Drawer.Body className="overflow-hidden ">
          <ul className="flex  flex-col justify-center items-center gap-10 text-xl text-center   bg-white hover:text-white">
            {LINKS.map((link, index) => (
              <NavItem key={index} href={link.path} toggleDropDown={close}>
                {link.title}
              </NavItem>
            ))}
          </ul>
          <div className="flex justify-center mt-10 bg" onClick={close}>
            <Link
              to={"/login"}
              className="btn btn-primary py-1.5 px-8 rounded-md btn-md bg-jade-600
               text-white border-0 hover:bg-jade-700 transition-all"
            >
              Login
            </Link>
          </div>
        </Drawer.Body>
      </Drawer>
      <Group position="center">
        <Humberger openDrawer={open} />
      </Group>
    </>
  );
}
export default DropDownMenu;
