import { matchPath, useLocation, useNavigate } from "react-router";
import { Menu, Appbar as PaperAppbar } from "react-native-paper";
import {
  useDefaultTitle,
  useGetResourceLabel,
  useResourceDefinitions,
  useTranslate,
} from "ra-core";
import { useState } from "react";

export const Appbar = () => {
  const title = useDefaultTitle();
  const location = useLocation();
  const navigate = useNavigate();
  const translate = useTranslate();
  const [visible, setVisible] = useState(false);
  const resources = useResourceDefinitions();
  const getResourceLabel = useGetResourceLabel();
  const isEditLocation = matchPath("/:page/:id", location.pathname);
  const isShowLocation = matchPath("/:page/:id/show", location.pathname);

  return (
    <PaperAppbar.Header>
      {isEditLocation || isShowLocation ? (
        <PaperAppbar.BackAction onPress={() => navigate(-1)} />
      ) : null}
      <PaperAppbar.Content title={title} />
      <Menu
        visible={visible}
        onDismiss={() => setVisible(false)}
        anchor={
          <PaperAppbar.Action
            icon="dots-vertical"
            onPress={() => setVisible(true)}
          />
        }
      >
        <Menu.Item
          onPress={() => {
            setVisible(false);
            navigate("/");
          }}
          title={translate("ra.page.dashboard")}
        />
        {Object.keys(resources).map((resource) => (
          <Menu.Item
            key={resource}
            onPress={() => {
              setVisible(false);
              navigate(`/${resource}`);
            }}
            title={getResourceLabel(resource)}
          />
        ))}
      </Menu>
    </PaperAppbar.Header>
  );
};
