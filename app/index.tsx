import {
  BottomNavigation,
  Text,
  PaperProvider,
  DefaultTheme,
  List,
  Badge,
} from "react-native-paper";
import { Link, useRouter } from "expo-router";
import { TouchableOpacity, StyleSheet, View } from "react-native";

import * as React from "react";

const whatsappTheme = {
  colors: {
    primary: "rgb(0, 107, 95)",
    onPrimary: "rgb(255, 255, 255)",
    primaryContainer: "rgb(117, 248, 228)",
    onPrimaryContainer: "rgb(0, 32, 28)",
    secondary: "rgb(57, 106, 30)",
    onSecondary: "rgb(255, 255, 255)",
    secondaryContainer: "rgb(185, 242, 149)",
    onSecondaryContainer: "rgb(8, 33, 0)",
    tertiary: "rgb(0, 109, 47)",
    onTertiary: "rgb(255, 255, 255)",
    tertiaryContainer: "rgb(102, 255, 142)",
    onTertiaryContainer: "rgb(0, 33, 9)",
    error: "rgb(186, 26, 26)",
    onError: "rgb(255, 255, 255)",
    errorContainer: "rgb(255, 218, 214)",
    onErrorContainer: "rgb(65, 0, 2)",
    background: "rgb(250, 253, 251)",
    onBackground: "rgb(25, 28, 27)",
    surface: "rgb(250, 253, 251)",
    onSurface: "rgb(25, 28, 27)",
    surfaceVariant: "rgb(218, 229, 225)",
    onSurfaceVariant: "rgb(63, 73, 70)",
    outline: "rgb(111, 121, 118)",
    outlineVariant: "rgb(190, 201, 197)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(45, 49, 48)",
    inverseOnSurface: "rgb(239, 241, 239)",
    inversePrimary: "rgb(84, 219, 200)",
    elevation: {
      level0: "transparent",
      level1: "rgb(238, 246, 243)",
      level2: "rgb(230, 241, 239)",
      level3: "rgb(223, 237, 234)",
      level4: "rgb(220, 236, 232)",
      level5: "rgb(215, 233, 229)",
    },
    surfaceDisabled: "rgba(25, 28, 27, 0.12)",
    onSurfaceDisabled: "rgba(25, 28, 27, 0.38)",
    backdrop: "rgba(41, 50, 48, 0.4)",
  },
};

const ChatsRoute = () => {
  const router = useRouter();

  const [discussions, setDiscussions] = React.useState([
    {
      id: "dcbzhibvhvbfhsvjvdivbshv",
      name: "Djim Momar Lo",
      avatar: "https://avatar.iran.liara.run/public",
      content: [
        { role: "you", content: "Helloo" },
        { role: "target", content: "heyy what's up?" },
      ],
    },
    {
      id: "abc123xyz",
      name: "Ndeye Aida Lô",
      avatar: "https://avatar.iran.liara.run/public",
      content: [
        { role: "you", content: "Hey, how's your AI project going?" },
        {
          role: "target",
          content: "It's going well! Just optimizing some models.",
        },
      ],
    },
    {
      id: "xyz987lmn",
      name: "John Doe",
      avatar: "https://avatar.iran.liara.run/public",
      content: [
        { role: "you", content: "Did you finish the report?" },
        { role: "target", content: "Not yet, but I’m almost done!" },
      ],
    },
    {
      id: "lmn654pqr",
      name: "Jane Smith",
      avatar: "https://avatar.iran.liara.run/public",
      content: [
        { role: "you", content: "Want to grab lunch?" },
        { role: "target", content: "Sure! Where should we go?" },
      ],
    },
    {
      id: "efg321uvw",
      name: "Aliou Diop",
      avatar: "https://avatar.iran.liara.run/public",
      content: [
        { role: "you", content: "Did you see the new tech conference lineup?" },
        { role: "target", content: "Yeah! Looks super interesting." },
      ],
    },
    {
      id: "hij789rst",
      name: "Mariam Ba",
      avatar: "https://avatar.iran.liara.run/public",
      content: [
        { role: "you", content: "Let's meet at 4 PM for the project update." },
        { role: "target", content: "Okay, I'll be there!" },
      ],
    },
  ]);

  return (
    <List.Section>
      <List.Subheader>
        <View style={styles.BadgeNav}>
          <TouchableOpacity style={styles.Badge}>
            <Text>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.BadgeNoSelected}>
            <Text>Favorites</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.BadgeNoSelected}>
            <Text>Unread</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.BadgeNoSelected}>
            <Text>Groups</Text>
          </TouchableOpacity>
        </View>
      </List.Subheader>

      {discussions.map((discussion, index) => (
        <List.Item
          key={index}
          title={discussion.name}
          description={
            discussion.content[discussion.content.length - 1].content
          }
          left={() => (
            <List.Icon
              icon={{ uri: discussion.avatar }}
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                margin: 5,
              }}
            />
          )}
          onPress={() => {
            router.navigate(`/chats/${discussion.id}`);
          }}
        />
      ))}
    </List.Section>
  );
};

const UpdatesRoute = () => <Text>Updates</Text>;

const GroupsRoute = () => <Text>Communities</Text>;

const CallsRoute = () => <Text>Calls</Text>;

export default function Index() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "discussions",
      title: "Chats",
      focusedIcon: "chat",
      unfocusedIcon: "chat-outline",
    },
    { key: "updates", title: "Updates", focusedIcon: "album" },
    {
      key: "groups",
      title: "Communities",
      focusedIcon: "account-group",
      unfocusedIcon: "account-group-outline",
    },
    {
      key: "calls",
      title: "Calls",
      focusedIcon: "phone",
      unfocusedIcon: "phone-outline",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    discussions: ChatsRoute,
    updates: UpdatesRoute,
    groups: GroupsRoute,
    calls: CallsRoute,
  });

  return (
    <PaperProvider theme={whatsappTheme}>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  BadgeNav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },

  Badge: {
    backgroundColor: "#dcf8c6",
    padding: 10,
    borderRadius: 15,
  },
  BadgeNoSelected: {
    backgroundColor: "#f5f9f5",
    padding: 10,
    marginLeft: 10,
    borderRadius: 15,
  },
});
