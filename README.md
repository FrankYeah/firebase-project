# firebase-project

1. 用戶系統，需有 email, name。
2. 好友功能：
- 搜尋 email 確認 id 存在，送邀請
- 發送邀請的那端狀態為 `待邀請`，等待接收那端為 `待接受`
- 一方取消 or 一方接受，兩邊同時變更狀態
3. 發文功能:
   article_id,
   article_title,
   article_content,
   article_tag: `表特`、`八卦`、`就可`、`生活`,
   author,
   created_time
4. 搜尋特定 tag 的全部文章。
5. 搜尋特定好友的全部文章。
6. 搜尋特定好友的特定 tag 的文章。
