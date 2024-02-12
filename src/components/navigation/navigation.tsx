import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from '@nextui-org/react';
import React from 'react';
import { menuItems } from './constants';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Navigation = (): React.ReactElement => {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	const location = useLocation();

	return (
		<Navbar onMenuOpenChange={setIsMenuOpen} className="mb-4">
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
					className="sm:hidden"
				/>
				<NavbarBrand>
					<p className="font-semibold text-inherit">BattleBots</p>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4">
				{Object.keys(menuItems).map((key: string) => {
					return (
						<NavbarItem
							key={key}
							isActive={
								menuItems[key as keyof typeof menuItems] === location.pathname
							}>
							<Link to={menuItems[key as keyof typeof menuItems]}>{key}</Link>
						</NavbarItem>
					);
				})}
			</NavbarContent>
			<NavbarMenu>
				{Object.keys(menuItems).map((key: string) => (
					<NavbarMenuItem key={`${key}`}>
						<Link to={menuItems[key as keyof typeof menuItems]}>{key}</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
};
