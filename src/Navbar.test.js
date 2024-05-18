import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavBar from "./components/Navbar";

test('shows if 5 links are present',async () => {
  render(<NavBar/>);
  const links = await screen.findAllByRole('link');
  
  expect(links).toHaveLength(5);
});

test('shows all 5 links are visible when entire navbar is visible', async() => {
  render(<NavBar/>);
  const home = await screen.findByText('Home');
  const about = await screen.findByText('About');
  const projects = await screen.findByText('Projects');
  const resume = await screen.findByText('Resume');
  expect(home).toBeInTheDocument();
  expect(about).toBeInTheDocument();
  expect(projects).toBeInTheDocument();
  expect(resume).toBeInTheDocument();
});