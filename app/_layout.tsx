import { AppLayout } from "@/src/modules/app/react/AppLayout";
import { AppWrapper } from "@/src/modules/app/react/AppWrapper";
import AppStack from "@/src/modules/navigation/AppStack";

export default function RootLayout() {
  return (
    <AppWrapper>
      <AppLayout>
        <AppStack />
      </AppLayout>
    </AppWrapper>
  );
}
