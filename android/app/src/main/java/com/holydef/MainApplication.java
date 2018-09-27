package com.holydef;

import android.app.Application;

import com.facebook.react.ReactApplication;
import cl.json.RNSharePackage;
// import com.zmxv.RNSound.RNSoundPackage;
// import com.tanguyantoine.react.MusicControl;
// import fm.indiecast.rnaudiostreamer.RNAudioStreamerPackage;
// import rnsoundplayer.RNSoundPlayerPackage;
import com.brentvatne.react.ReactVideoPackage; 
import org.devio.rn.splashscreen.SplashScreenReactPackage; 
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNSharePackage(),
            // new MusicControl(),
            // new RNAudioStreamerPackage(),
            // new RNSoundPlayerPackage(), 
            new SplashScreenReactPackage(), 
            new VectorIconsPackage(),
            new ReactVideoPackage()
            // new RNSoundPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
