"use client";

import { useState } from "react";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { signOut } from "next-auth/react";

const MenuMobile = ({ data, status }) => {
  const IconMenu = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
        />
      </svg>
    );
  };
  return (
    <div className=" flex items-center justify-end w-full h-full  md:hidden">
      <Menu closeOnSelect={false}>
        <MenuButton as={Button} colorScheme="white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </MenuButton>
        <MenuList minWidth="240px">
          <MenuOptionGroup title="Revistas" type="radio" fontSize={20}>
            {data.map((cat, index) => (
              <MenuItem key={index} as="a" href={`/categorias/${cat.id}`}>
                {cat.name}
              </MenuItem>
            ))}
          </MenuOptionGroup>
          <MenuDivider />
          <MenuOptionGroup title="Artigos" type="checkbox" fontSize={20}>
            <MenuItem as="a" href="/explore/free">
              Gratuitos
            </MenuItem>
            <MenuItem as="a" href="/explore/recommendation">
              Recomendados
            </MenuItem>
            <MenuItem as="a" href="/explore/trending">
              Tendencias
            </MenuItem>
          </MenuOptionGroup>
          <MenuDivider />
          <MenuOptionGroup title="Eventos" type="checkbox" fontSize={20}>
            <MenuItem as="a" href="/events/event/happen">
              Eventos Futuros
            </MenuItem>
            <MenuItem as="a" href="/events/event/happening">
              Rolando
            </MenuItem>
            <MenuItem as="a" href="/events/event/finished">
              Encerrado
            </MenuItem>
          </MenuOptionGroup>
          <MenuDivider />
          {status === "authenticated" && (
            <>
              <MenuOptionGroup title="Biblioteca" type="checkbox" fontSize={20}>
                <MenuItem as="a" href="#">
                  Revistas
                </MenuItem>
                <MenuItem as="a" href="#">
                  Artigos
                </MenuItem>
              </MenuOptionGroup>
              <MenuDivider />
              <MenuOptionGroup title="Conta" type="checkbox" fontSize={20}>
                <MenuItem as="a" href="#">
                  Perfil
                </MenuItem>
                <MenuItem as="a" href="#">
                  Pedidos
                </MenuItem>
                <MenuItem as="a" href="#">
                  Financeiro
                </MenuItem>
                <MenuItem as="a" href="#">
                  Favoritos
                </MenuItem>
                <MenuItem as="a" href="#" onClick={()=>signOut({callbackUrl:'/'})}>
                  Sair
                </MenuItem>
              </MenuOptionGroup>
              <MenuDivider />
            </>
          )}
        </MenuList>
      </Menu>
    </div>
  );
};
export default MenuMobile;
