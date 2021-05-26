import mongoose from 'mongoose';

const { Schema } = mongoose;
const PostSchema = new Schema({
  title: String,
  body: String,
  tags: [String],
  publishedDate: {
    type: Date,
    default: Date.now,
  },
});

//스키마를 모델 인스턴스로 만듦 (스키마 이름, 스키마 객체)
// 데이터베이스에 만들어지는 컬렉션 이름은 스키마 이름의 복수형 ex:Post=>posts
const Post = mongoose.model('Post', PostSchema);
export default Post;
