const Header = ({ title }) => {
  return (
    <header>
      <h1>{title} comes from the header </h1>
    </header>
  )
}
Header.defaultProps = {
  title: 'Default hello',
}
export default Header
