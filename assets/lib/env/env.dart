// Change to true for production
import 'package:flutter/foundation.dart';
import 'package:logger/logger.dart';

const bool devLevel = kIsWeb ? false : true;
const Level loggerLevel = devLevel ? Level.debug : Level.off;
const String envFile = devLevel ? 'lib/env/.dev_env' : 'lib/env/.env';
