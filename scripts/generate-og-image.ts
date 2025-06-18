import sharp from "sharp";
import path from "path";
import { promises as fs } from "fs";

async function generateOgImage() {
  const inputPath = path.join(
    process.cwd(),
    "public/images/start-with-gleam/top-section-bg.png"
  );
  const outputPath = path.join(process.cwd(), "public/images/og-image.png");

  try {
    // Check if input file exists
    await fs.access(inputPath);
    console.log(`원본 이미지 찾음: ${inputPath}`);

    // Process the image
    await sharp(inputPath)
      .resize(1200, 630, {
        fit: "cover",
        position: "center",
      })
      // Add a semi-transparent overlay to ensure text readability if needed later
      .composite([
        {
          input: Buffer.from([0, 0, 0, 20]), // Very light black overlay
          raw: {
            width: 1,
            height: 1,
            channels: 4,
          },
          tile: true,
          blend: "over",
        },
      ])
      .png({
        quality: 90,
        compressionLevel: 9,
      })
      .toFile(outputPath);

    console.log(`OpenGraph 이미지 생성 완료: ${outputPath}`);
    console.log("크기: 1200x630px");

    // Get file size
    const stats = await fs.stat(outputPath);
    console.log(`파일 크기: ${(stats.size / 1024).toFixed(2)}KB`);
  } catch (error) {
    console.error("OpenGraph 이미지 생성 중 오류 발생:", error);
    process.exit(1);
  }
}

// Run the script
generateOgImage().catch(console.error);
