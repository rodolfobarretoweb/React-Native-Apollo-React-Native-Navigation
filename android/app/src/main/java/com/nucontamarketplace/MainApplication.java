package com.nucontamarketplace;

import com.facebook.react.ReactPackage;
import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.controllers.ActivityCallbacks;
import com.AlexanderZaytsev.RNI18n.RNI18nPackage;
import com.remobile.toast.RCTToastPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {
  @Override
	public boolean isDebug() {
		return BuildConfig.DEBUG;
	}

	protected List<ReactPackage> getPackages() {
		return Arrays.<ReactPackage>asList(
			new RNI18nPackage(),
			new RCTToastPackage()
		);
	}

  @Override
	public List<ReactPackage> createAdditionalReactPackages() {
		return getPackages();
	}

	@Override
	public String getJSMainModuleName() {
		return "index";
	}
}
