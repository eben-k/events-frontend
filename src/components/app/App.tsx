import EventsTable from "../Events";
import TopBar from "../TopBar";
import AppLayout from "./AppLayout";
import AppThemeProvider from "./AppThemeProvider";

const App = () => {
  return (
    <AppThemeProvider>
      <AppLayout>
        <TopBar />
        <EventsTable />
      </AppLayout>
    </AppThemeProvider>
  );
};

export default App;
