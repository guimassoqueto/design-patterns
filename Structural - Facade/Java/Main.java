
import java.io.File;
import Facade.*;

public class Main {
    public static void main(String[] args) {
      VideoConversionFacade converter = new VideoConversionFacade();
      File mp4Video = converter.convertVideo("youtubevideo.ogg", "mp4");
      System.out.println(mp4Video);
    }
}