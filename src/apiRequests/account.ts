import http from "@/lib/http";
import {
  AccountResType,
  UpdateMeBodyType,
  ChangePasswordV2BodyType,
  ChangePasswordV2ResType,
} from "@/schemaValidations/account.schema";

const prefix = "/accounts";
const accountApiRequest = {
  me: () => http.get<AccountResType>("/accounts/me"),
  updateMe: (body: UpdateMeBodyType) =>
    http.put<AccountResType>("/accounts/me", body),
  sChangePasswordV2: (accessToken: string, body: ChangePasswordV2BodyType) =>
    http.put<ChangePasswordV2ResType>(`${prefix}/change-password-v2`, body, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }),
  changePasswordV2: (body: ChangePasswordV2BodyType) =>
    http.put<ChangePasswordV2ResType>(
      `/api${prefix}/change-password-v2`,
      body,
      {
        baseUrl: "",
      }
    ),
};
export default accountApiRequest;
